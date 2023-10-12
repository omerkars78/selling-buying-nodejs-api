import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/database';  // Corrected import
import User from './User';  // Import the User model
import Product from './Product';  // Import the Product model

class Comment extends Model {
    public id!: number;
    public userId!: number;
    public productId!: number;
    public content!: string;

    public static initialize(sequelize: Sequelize) {
        Comment.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            userId: {
                type: DataTypes.INTEGER,
                references: {
                    model: User,  // Reference the User model directly
                    key: 'id'
                }
            },
            productId: {
                type: DataTypes.INTEGER,
                references: {
                    model: Product,  // Reference the Product model directly
                    key: 'id'
                }
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'comment'
        });
    }
}

// Export the comment model directly, no need for a separate initialization function
export default Comment;
