import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/database';  // Corrected import
import User from './User';  // Import the User model
import Payment from './Payment';  // Import the Payment model

class Invoice extends Model {
    public id!: number;
    public userId!: number;
    public paymentId!: number;
    public invoiceNumber?: string;
    public invoiceDate!: Date;
    public totalAmount!: number;
    public taxAmount!: number;
    public status!: 'paid' | 'unpaid';
    public details?: string;

    public static initialize(sequelize: Sequelize) {
        Invoice.init({
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
            paymentId: {
                type: DataTypes.INTEGER,
                references: {
                    model: Payment,  // Reference the Payment model directly
                    key: 'id'
                }
            },
            invoiceNumber: {
                type: DataTypes.STRING,
                allowNull: true
            },
            invoiceDate: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            },
            totalAmount: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            taxAmount: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            status: {
                type: DataTypes.ENUM('paid', 'unpaid'),
                allowNull: false
            },
            details: {
                type: DataTypes.TEXT,
                allowNull: true
            }
        }, {
            sequelize,
            modelName: 'invoice'
        });
    }
}

// Export the invoice model directly, no need for a separate initialization function
export default Invoice;
