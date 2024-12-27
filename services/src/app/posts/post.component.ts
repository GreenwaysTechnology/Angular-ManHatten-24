import { Component } from "@angular/core";
import { PostService } from "./post.service";


@Component({
    selector: 'app-post',
    templateUrl: 'post.component.html'
})
export class PostComponent {

    posts!: any[]
    postForm: any = { title: '', body: '' };
    selectedPost: any = null;

    constructor(private postService: PostService) { }
    ngOnInit() {
        setTimeout(()=>{
            this.getPosts()
        },5000)
    }
    getPosts() {
        this.postService.getPosts().subscribe({
            next: (posts) => {
                this.posts = posts
            },
            error: (err) => {

            }
        })
    }
    addPost() {
        if (this.postForm.title && this.postForm.body) {
            this.postService.createPost(this.postForm).subscribe((newPost) => {
                this.posts.push(newPost); // Add the new post to the list
                this.resetForm(); // Reset the form after adding
            });
        }
    }
    private resetForm() {
        this.selectedPost = null;
        this.postForm = { title: '', body: '' };

    }
    updatePost() {
        if (this.selectedPost && this.selectedPost.id) {
            console.log('inside update post', this.postForm)
            this.postService.updatePost(this.postForm).subscribe((data) => {
                // Find the index of the post being updated
                const index = this.posts.findIndex(post => post.id === this.postForm.id);
                if (index !== -1) {
                    // Replace the old post with the updated post
                    this.posts[index] = { ...this.postForm };
                }
                this.resetForm(); // Reset the form after updating
            });
        }
    }
    selectPost(post: any) {
        this.selectedPost = { ...post };
        this.postForm = { ...post, title: post.title, body: post.body };
    }
    deletePost(id: number) {
        this.postService.deletePost(id).subscribe(() => {
            this.posts = this.posts.filter((post) => post.id !== id); // Remove the deleted post from the list
        });
    }
}