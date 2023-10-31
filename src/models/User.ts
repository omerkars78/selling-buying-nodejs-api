import { DataTypes, Model, Sequelize } from 'sequelize';
import sequelize from '../config/database';  // Corrected import
import Gender from './Gender';  
class User extends Model {
    public id!: number;
    public name!: string;
    public surname!: string;
    public genderId!: number;
    public birthday!: Date;
    public email!: string;
    public password!: string;
    public profileImage?: string;
    public verificationCode?: string;
    public verified!: boolean;
    public userType?: string;
    public country?: string;
    public city!: string;
    public dsitrict?: string;
    public school!: string;
    public detailedAddress! : string;
    public isFrozen!: boolean;
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
            surname: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
            nickname: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
            genderId: {
                type: DataTypes.INTEGER.UNSIGNED,  
                references: {
                    model: Gender,
                    key: 'id'
                },
                onDelete:'CASCADE'
            },
            birthday: {
                type: DataTypes.DATE,
                allowNull: true,
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
            isFrozen: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,  // Default value is 'false' indicating the account is not frozen
            },
            isAdmin: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false, // Eğer kullanıcı doğrulanmadıysa default değeri false olarak alabilirsiniz.
            },
            userType: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false, 
            },
            country: {
                type: new DataTypes.STRING(128),
                allowNull: true,
            },
            city: {
                type: new DataTypes.STRING(128),
                allowNull: true,
            },
            district: {
                type: new DataTypes.STRING(128),
                allowNull: true,
            },
            school: {
                type: new DataTypes.STRING(128),
                allowNull: true,
            },
            department: {
                type: new DataTypes.STRING(128),
                allowNull: true,
            },
            detailedAddress: {
                type: new DataTypes.STRING(512), 
                allowNull: true,
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
