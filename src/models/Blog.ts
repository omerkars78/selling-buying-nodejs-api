import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/database';
import User from './User';
import BlogCategory from './BlogCategory';

class Blog extends Model {
    public id!: number;
    public userId!: number;
    public blogCategoryId!: number;
    public title!: string;
    public content!: string;
    public image?: string;

    public static initialize(sequelize: Sequelize) {
        Blog.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            userId: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: User,
                    key: 'id'
                },
                onDelete: 'CASCADE'
            },
            blogCategoryId: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: BlogCategory,
                    key: 'id'
                },
                onDelete: 'CASCADE'
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true
            },
            country: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            city: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            district: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            school: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
        }, {
            sequelize,
            modelName: 'blog',
            paranoid: true
        });
    }
}

export default Blog;
