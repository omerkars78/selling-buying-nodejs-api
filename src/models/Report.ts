import { DataTypes, Model, Sequelize } from 'sequelize';
import sequelize from '../config/database';
import User from './User';
import ReportCategory from './ReportCategory';
class Report extends Model {
    public id!: number;
    public reporterId!: number;
    public reportedId!: number;
    public reason!: string;
    public reportCategoryId! : number;

    public static initialize(sequelize: Sequelize) {
        Report.init({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            reporterId: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: User,
                    key: 'id'
                },
                onDelete: 'CASCADE',
                allowNull: false,
            },
            reportCategoryId: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: ReportCategory,
                    key: 'id'
                },
                onDelete: 'CASCADE',
                allowNull: false,
            },
            reportedId: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: 'users',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                allowNull: false,
            },
            reason: {
                type: new DataTypes.STRING(256),
                allowNull: false,
            },
        }, {
            tableName: 'reports',
            sequelize: sequelize,  // this bit is important
            paranoid: true
        });
    }
}

export default Report;
