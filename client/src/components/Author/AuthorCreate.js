import React, {Component} from 'react';
import {graphql, compose} from 'react-apollo';
import {addAuthorMutation} from '../../queries';
import {Field, reduxForm} from 'redux-form';
import history from '../../history';

class AuthorCreate extends Component{
    renderInput({input, label}){
        return(            
            <div className="field">
                <label>{label}</label>
                <input type="text" placeholder={label} {...input} />
            </div>
        )
    }
    addAuthor = (author) => {
        this.props.addAuthorMutation({
            variables:{
                name: author.name,
                country: author.country
            }
        });
        history.push('/');
    }
    render(){
        const {handleSubmit} = this.props;
        return(
            <form className="ui form" onSubmit={handleSubmit(this.addAuthor)}>
                <Field name="name" label="Author's Name" component={this.renderInput} />
                <Field name="country" label="Country" component={this.renderInput} />
                <button className="ui button" type="submit">Create</button>
            </form>
        );
    }
}

const reduxWrapper = reduxForm({
    form: 'authorForm'
})(AuthorCreate);

export default compose(
    graphql(addAuthorMutation, {name: 'addAuthorMutation'})
)(reduxWrapper);