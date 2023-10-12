import { DataTypes, Model, Sequelize } from 'sequelize';
import sequelize from '../config/database';  // Corrected import

class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public profileImage?: string;
    public verificationCode?: string;
    public verified!: boolean;
    public userType?: string;

    public static initialize(sequelize: Sequelize) {
        User.init({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
            email: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
            password: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
            // ... other field definitions
        }, {
            tableName: 'users',
            sequelize: sequelize,  // this bit is important
        });
    }
}

// Export the user model directly, no need for a separate initialization function
export default User;
