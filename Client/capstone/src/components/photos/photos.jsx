import axios from 'axios';
import React, { Component } from 'react';
import { API_PICTURE_URL } from '../../api/api.js';

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
			imagePreview_Url: '',
			description: '',
			name: '',
			image: {}
        };

        this.handleImageChange = this.handleImageChange.bind(this);
        this.SaveSubmit = this.SaveSubmit.bind(this);
    }

    SaveSubmit(e) {
        e.preventDefault();
        console.log(this.state.imagePreview_Url);
        //TODO - save > this.state.imagePreview_Url in you DB using your API logic.
		const newurl = API_PICTURE_URL;
		const newfile = this.state.file;
		axios.post({
			url: newurl,
			newfile
			
			// name: this.state.name,
			// description: this.state.description,
			// data: this.state.buffer,
			// imagePreview_Url: this.state.imagePreview_Url,
			// contentType: 'image/png'
			})
			.then(response => this.setState({newfile: response.data.id}));
			console.log(this.setState({newfile}));
		
	}

    handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreview_Url: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    render() {
        return (
            <div style={{paddingTop:40}}>
                <div>
                    <input type="file" onChange={this.handleImageChange} />
                    <button onClick={this.SaveSubmit}>Save/Upload Image in DB</button>
                </div>
                <div>
                    <img src={this.state.imagePreview_Url} />
                </div>                           
            </div>
        )
    }
}
export default ImageUpload;