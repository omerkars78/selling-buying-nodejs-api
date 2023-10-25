import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/database';  // Corrected import
import User from './User';  // Import the User model

class PaymentCard extends Model {
    public id!: number;
    public userId!: number;
    public lastFour!: string;
    public cardType?: string;
    public expiryDate?: Date;
    public tokenizedVersion?: string;

    public static initialize(sequelize: Sequelize) {
        PaymentCard.init({
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
                },
                onDelete:'CASCADE'
            },
            lastFour: {
                type: DataTypes.STRING(4),
                allowNull: false
            },
            cardType: {
                type: DataTypes.STRING,
                allowNull: true
            },
            expiryDate: {
                type: DataTypes.DATE,
                allowNull: true
            },
            tokenizedVersion: {
                type: DataTypes.STRING,
                allowNull: true
            }
        }, {
            sequelize,
            modelName: 'payment_card',
            paranoid:true

        });
    }
}

// Export the paymentCard model directly, no need for a separate initialization function
export default PaymentCard;
