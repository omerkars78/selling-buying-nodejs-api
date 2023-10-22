import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/database';  // Corrected import
import User from './User';  // Import the User model
import Product from './Product';  // Import the Product model

class Payment extends Model {
    public id!: number;
    public userId!: number;
    public productId!: number;
    public amount!: number;
    public paymentDate!: Date;
    public status!: 'successful' | 'failed' | 'pending';
    public method?: string;
    public transactionId?: string;

    public static initialize(sequelize: Sequelize) {
        Payment.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            userId: {
                type: DataTypes.INTEGER.UNSIGNED,  // UNSIGNED added here
                references: {
                    model: User,
                    key: 'id'
                }
            },
            productId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: Product,  // Reference the Product model directly
                    key: 'id'
                }
            },
            amount: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            paymentDate: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            },
            status: {
                type: DataTypes.ENUM('successful', 'failed', 'pending'),
                allowNull: false
            },
            method: {
                type: DataTypes.STRING,
                allowNull: true
            },
            transactionId: {
                type: DataTypes.STRING,
                allowNull: true
            }
        }, {
            sequelize,
            modelName: 'payment'
        });
    }
}

// Export the payment model directly, no need for a separate initialization function
export default Payment;
