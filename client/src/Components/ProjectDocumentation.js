import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class ProjectDocumentation extends React.Component {
    constructor(props) {
        super(props);

        const { projectId } = this.props;
        this.projectId = projectId;

        this.state = {
            fileList: null
        };
    }

    handleUpload(files) {
        for (var i = 0; i < files.length; i++) {
            console.log("Uploading file: " + files[i].name);

            // for each file, POST to API
            fetch('/api/projectdocumentation/' + this.projectId, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    filename: files[i].name
                })
            })
            .then(() => {
                this.getFileList();
            });
        }
    }

    handleDelete(documentId) {
        console.log("Deleting " + documentId);
        if (window.confirm("Are you sure you want to delete the selected document?")) {
            fetch('/api/projectdocumentation/' + this.projectId + '/' + documentId, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }        
            })
            .then(() => {this.getFileList()});   
        }  
    }

    getFileList() {
        fetch("/api/projectdocumentation/" + this.projectId) 
            .then(response => response.json())
            .then(files => {
                var fileList = files.map(f => {
                    var dateUploaded;

                    if (f.date_uploaded) {
                        dateUploaded = new Date(f.date_uploaded).toDateString();
                    } else {
                        dateUploaded = "";
                    }

                    return (
                        <tr key={f._id}>
                            <td className="survey-date-submitted-column">
                                {dateUploaded} 
                            </td>
                            <td>
                                {f.filename}
                            </td>
                            <td 
                                title="Delete this document"
                                onClick={() => this.handleDelete(f._id)}
                            >
                                <i className="material-icons mdc-button__icon" aria-hidden="true">
                                    delete_outlined
                                </i>                                
                            </td>
                        </tr>
                    );
                });
                this.setState({fileList: fileList});
            });
    }

    componentDidMount() {
        this.getFileList();
    }

    render() {

        const buttonDivStyle = {
            margin: '0px 0px 32px 0px'
        }

        return (
            <div className="column1">
                <input 
                    id="fileSelector" 
                    type="file" 
                    ref={(ref) => this.upload = ref} 
                    style={{ display: 'none' }} 
                    onChange={ (e) => this.handleUpload(e.target.files) }
                />
                
                <div style={buttonDivStyle}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => this.upload.click()} >
                        <i className="material-icons mdc-button__icon button-icon" aria-hidden="true">cloud_upload</i>
                        Upload document
                    </Button>
                </div>
                <Grid container direction="column" spacing={16}>
                    <div className="tableWrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th className="survey-date-submitted-column">Date uploaded</th>
                                    <th className="survey-student-column">Filename</th>
                                    <th />
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.fileList}
                            </tbody>
                        </table>
                    </div>
                </Grid>
            </div>
        )
    }
}
export default ProjectDocumentation;