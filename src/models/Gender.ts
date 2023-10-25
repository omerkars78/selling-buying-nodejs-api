import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/database';  // Corrected import


class Gender extends Model {
    public id!: number;
    public gender!: string;

    public static initialize(sequelize: Sequelize) {
        Gender.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            gender: {
                type: DataTypes.STRING(50),
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'gender',
        
        }
        );
    }
}

export default Gender;
