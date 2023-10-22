import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/database';  // Corrected import
import User from './User';  // Import the User model
import Product from './Product';  // Import the Product model

class Like extends Model {
    public id!: number;
    public userId!: number;
    public productId!: number;

    public static initialize(sequelize: Sequelize) {
        Like.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            userId: {
                type: DataTypes.INTEGER.UNSIGNED,
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
            }
        }, {
            sequelize,
            modelName: 'like'
        });
    }
}

// Export the like model directly, no need for a separate initialization function
export default Like;
