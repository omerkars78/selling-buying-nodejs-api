import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/database';

class ReportCategory extends Model {
    public id!: number;
    public name!: string;

    public static initialize(sequelize: Sequelize) {
        ReportCategory.init({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
        }, {
            sequelize,
            modelName: 'report_category',
            paranoid: true
        });
    }
}

export default  ReportCategory ;
