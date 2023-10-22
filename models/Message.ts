import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/database';  // Corrected import
import User from './User';  // Import the User model

class Message extends Model {
    public id!: number;
    public senderId!: number;
    public receiverId!: number;
    public content!: string;

    public static initialize(sequelize: Sequelize) {
        Message.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            senderId: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: User,  // Reference the User model directly
                    key: 'id'
                }
            },
            receiverId: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: User,  // Reference the User model directly
                    key: 'id'
                }
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'message'
        });
    }
}

// Export the message model directly, no need for a separate initialization function
export default Message;
