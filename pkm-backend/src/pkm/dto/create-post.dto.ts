export class CreatePostDTO {
    readonly nodeId: string;
    readonly nodeType: string;
    readonly title: string;
    readonly description: string;
    readonly body: string;
    readonly author: string;
    readonly date_posted: string
}