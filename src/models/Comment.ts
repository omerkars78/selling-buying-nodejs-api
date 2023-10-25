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
           
            content: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            rating: {
                type: DataTypes.FLOAT,  
                allowNull: true
            }
        }, {
            sequelize,
            modelName: 'comment',
            paranoid:true

        }
        );
    }
}

// Export the comment model directly, no need for a separate initialization function
export default Comment;
