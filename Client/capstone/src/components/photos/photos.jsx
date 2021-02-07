import axios from 'axios';
import React, { Component } from 'react';
import { CLIENT_RENEG_LIMIT } from 'tls';
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

    SaveSubmit(e) {
        e.preventDefault();
        // console.log(this.state.imagePreview_Url);
        //TODO - save > this.state.imagePreview_Url in you DB using your API logic.
		// const newurl = API_PICTURE_URL + '/upload';
		// const newfile = this.state.file;
        const formData = new FormData();
     const imageInfo = formData.append('image', this.state.file, this.state.file.name);
       console.log("line 29", this.state.file.name)
		axios.post('http://localhost:5000/api/pictures/upload', imageInfo)
            .then(response => console.log(response))
            .catch(err => {
                console.log(err)
            })
            console.log("hit")
			// .then(response => this.setState({newfile: response.data.id}));
			
	}

    handleImageChange(e) {
        e.preventDefault();
        // let reader = new FileReader();
        // let file = e.target.files[0];
        // console.log(e.target.files[0]);
        // reader.onloadend = () => {
        //     this.setState({
        //         file: file,
        //         imagePreview_Url: reader.result
        //     });
            
        // }
        // reader.readAsDataURL(file)
        this.setState({
            file: e.target.files[0]
        })
        console.log(e.target.files[0])
    }

    getImage(){

        axios.get('http://localhost:5000/api/pictures')
        .then(data => {
            // this.setState({file:this.state.fildata});
            console.log(data);
        }).catch(error => console.log(error)

        )
        console.log("hit")
    }
    render() {
        return (
            <div style={{paddingTop:40}}>
                <div>
                    <input type="file" onChange={this.handleImageChange} />
                    <button onClick={this.SaveSubmit}>Save/Upload Image in DB</button>
                    <button onClick={this.getImage}>GEt Image </button>

                </div>
                
                <div>
                    <img src={this.state.imagePreview_Url} />
                </div>                           
            </div>
        )
    }
}
export default ImageUpload;