import axios from 'axios';
import React, { Component } from 'react';
import { API_PICTURE_URL } from '../../api/api.js';

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
			imagePreview_Url: '',
			// description: '',
			// name: '',
			// image: {}
        };

        this.handleImageChange = this.handleImageChange.bind(this);
        this.SaveSubmit = this.SaveSubmit.bind(this);
    }

    SaveSubmit(event) {
        event.preventDefault();
        // console.log(this.state.imagePreview_Url);
		const newurl = API_PICTURE_URL + '/upload';
		// const newfile = this.state.file;
        const formData = new FormData();
        formData.append('name', this.state.file, this.state.file.name);
      	// console.log("line 29", this.state.file.name)
		// console.log(formData);
		   
		axios.post(newurl, formData)
            .then(response => console.log('line 30' + response))
            .catch(err => {
                console.log(err)
            })
            console.log("hit line 34")
			// .then(response => this.setState({newfile: response.data.id}));
			
	}

    handleImageChange(event) {
        event.preventDefault();

        this.setState({
            file: event.target.files[0]
        })
        console.log(event.target.files[0])
    }

    getImage(){

        axios.get('http://localhost:5000/api/pictures')
        .then(response => {
            this.setState(this.state.file=response.data);
            console.log(response);
            console.log(this.state.file)
        }).catch(error => console.log(error)

        )
        console.log("success")
    }
    render() {
        return (
            <div style={{paddingTop:40}}>
                <div>
                    <form action='http://localhost:5000/api/pictures/upload' method="POST" enctype="multipart/form-data">
                        <input type="file" name="image" />
                        <input type='submit'></input>
                        {/* <button onClick={this.SaveSubmit}>Save/Upload Image in DB</button>
                        <button onClick={this.getImage}>GEt Image </button> */}
                    </form>
                </div>
                
                <div>
                    <img src={this.state.imagePreview_Url} />
                </div>                           
            </div>
        )
    }
}
export default ImageUpload;