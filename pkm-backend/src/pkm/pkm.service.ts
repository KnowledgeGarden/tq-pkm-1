import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './interfaces/post.interface';
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class PKMService {

    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) { }

    /**
     * For blog posts only
     */
    async getPosts(): Promise<Post[]> {
        let query = {
            nodeType: 'BlogType'
        };
        const posts = await this.postModel.find(query).exec();
        return posts;
    }

    async getJournal(): Promise<Post[]> {
        const posts = await this.postModel.find().exec();
        return posts;
    }

    /**
     * Fetch specific nodeTypes
     * @param nType 
     * @param offset 
     * @param count 
     */
    async getPostsByType(nType, offset, count): Promise<Post[]> {
        let query = {
            nodeType: nType
        };
        const posts = await this.postModel.find(query).exec();
        return posts;
    }

    async getPost(postID): Promise<Post> {
        const post = await this.postModel
            .findById(postID)
            .exec();
        return post;
    }

    async addPost(createPostDTO: CreatePostDTO): Promise<Post> {
        const newPost = await this.postModel(createPostDTO);
        return newPost.save();
    }

    async editPost(postID, createPostDTO: CreatePostDTO): Promise<Post> {
        const editedPost = await this.postModel
            .findByIdAndUpdate(postID, createPostDTO, { new: true });
        return editedPost;
    }

    async deletePost(postID): Promise<any> {
        const deletedPost = await this.postModel
            .findByIdAndRemove(postID);
        return deletedPost;
    }

}
