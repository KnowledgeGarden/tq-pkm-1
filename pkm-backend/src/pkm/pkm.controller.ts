import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { PKMService } from './pkm.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';
import { json } from 'body-parser';


@Controller('pkm')
export class PKMController {

    constructor(private pkmService: PKMService) { }
    // This is for blog posts
    // Fetch all posts
    @Get('posts')
    async getPosts(/*@Res() res*/) : Promise<Array<Object>> {    
        const posts = await this.pkmService.getPosts();
        console.log('BacksidePosts', posts)
        return posts;
        //return res.status(HttpStatus.OK).json(posts);
    }

    @Get('journal')
    async getJournal(@Res() res) {
        console.log('BacksideJournal')
        const posts = await this.pkmService.getJournal();
        console.log('BacksideJournal-2', posts)
        return res.status(HttpStatus.OK).json(posts);
    }
    
    // Fetch a particular post using ID
    @Get('post/:postID')
    async getPost(@Res() res, @Param('postID', new ValidateObjectId()) postID) {
        const post = await this.pkmService.getPost(postID);
        if (!post) throw new NotFoundException('Post does not exist!');
        return res.status(HttpStatus.OK).json(post);

    }

    // Submit a post
    @Post('/post')
    async addPost(@Res() res, @Body() createPostDTO: CreatePostDTO) {
        const newPost = await this.pkmService.addPost(createPostDTO);
        return res.status(HttpStatus.OK).json({
            message: "Post has been submitted successfully!",
            post: newPost
        })
    }


    // Edit a particular post using ID
    @Put('/edit')
    async editPost(
        @Res() res,
        @Query('postID', new ValidateObjectId()) postID,
        @Body() createPostDTO: CreatePostDTO
    ) {
        const editedPost = await this.pkmService.editPost(postID, createPostDTO);
        if (!editedPost) throw new NotFoundException('Post does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Post has been successfully updated',
            post: editedPost
        })
    }

    // Delete a post using ID
    @Delete('/delete')
    async deletePost(@Res() res, @Query('postID', new ValidateObjectId()) postID) {
        const deletedPost = await this.pkmService.deletePost(postID);
        if (!deletedPost) throw new NotFoundException('Post does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Post has been deleted!',
            post: deletedPost
        })
    }
}
