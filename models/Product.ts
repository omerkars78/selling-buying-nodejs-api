import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/database';  // Corrected import
import User from './User';

class Product extends Model {
    public id!: number;
    public userId!: number;
    public title!: string;
    public description?: string;
    public price!: number;
    public image?: string;
    public is_sold!: boolean;

    public static initialize(sequelize: Sequelize) {
        Product.init({
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
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true
            },
            is_sold: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        }, {
            sequelize,
            modelName: 'product',
            paranoid:true

        });
    }
}

// Export the product model directly, no need for a separate initialization function
export default Product;
