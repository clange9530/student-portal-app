import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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

        fetch('/api/projectdocumentation/' + this.projectId + '/' + documentId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }        
        })
        .then(() => {this.getFileList()});
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

        const style = {
            margin: '8px 8px 4px 2px'
        };

        var divStyle = {
            border: '2px solid #000000'
        };

        return (
            <div style={{divStyle}} className="column1">
                <Card>
                    <AppBar position="static" >
                        <Toolbar variant="dense">
                            <Typography variant="title" color="inherit">
                            Project Documentation
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Grid container direction="column" spacing={16} className="email-grid">
                        <Grid item md={12}>
                            <input 
                                id="fileSelector" 
                                type="file" 
                                ref={(ref) => this.upload = ref} 
                                style={{ display: 'none' }} 
                                onChange={ (e) => this.handleUpload(e.target.files) }
                            />
                            <Button 
                                variant="contained" 
                                style={style} 
                                color="primary" 
                                onClick={() => this.upload.click()} >
                                <i className="material-icons mdc-button__icon button-icon" aria-hidden="true">cloud_upload</i>
                                Upload document
                            </Button>
                        </Grid>                    
                    </Grid>
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
                </Card>
            </div>
        )
    }
}
export default ProjectDocumentation;