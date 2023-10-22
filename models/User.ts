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
            studentEmail: {
                type: new DataTypes.STRING(128),
                allowNull: true,
            },
            phoneNumber:{
                type: new DataTypes.STRING(128),
                allowNull: true,
            },
            password: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
            profileImage: {
                type: DataTypes.STRING(256), // Varsayılan uzunluğu 256 olarak aldım, ihtiyacınıza göre değiştirebilirsiniz.
                allowNull: true,
            },
            verificationCode: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            verified: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false, // Eğer kullanıcı doğrulanmadıysa default değeri false olarak alabilirsiniz.
            },
            userType: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false, 
            }
        }, {
            tableName: 'users',
            sequelize: sequelize,  // this bit is important
            paranoid:true
        });
    }
}

// Export the user model directly, no need for a separate initialization function
export default User;
