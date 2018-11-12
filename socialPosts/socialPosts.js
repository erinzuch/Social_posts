const socialPosts = {
    template: `
    <h1>My Thoughts</h1>

    <form>
        <label for=""> Title</label>

        <input id="form_title" type="text" placeholder="title">
        <input for="form_body">Thought</input>
        <input type="text">Body</input>
        <button>Add</button>
    </form>
    
    
    `,
    controller: [function () {
        const vm = this; 
    }]
};

angular
.module("App")
.components("socialPosts", socialPosts)