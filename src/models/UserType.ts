import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/database';  // Corrected import

class UserType extends Model {
    public id!: number;
    public type!: string;

    public static initialize(sequelize: Sequelize) {
        UserType.init({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            type: {
                type: DataTypes.STRING(50),
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'user_type',
        }
        );
    }
}

export default UserType;
