import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/database';  // Corrected import


class ProductCategory extends Model {
    public id!: number;
    public gender!: string;

    public static initialize(sequelize: Sequelize) {
       ProductCategory.init({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
            },

            name: {
                type: DataTypes.STRING(50),
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'product_category',
        
        }
        );
    }
}

export default ProductCategory;
