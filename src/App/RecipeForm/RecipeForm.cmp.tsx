import Paper from "material-ui/Paper";

import RaisedButton from "material-ui/RaisedButton";
import { Field } from "redux-form";

import React from "react";
// import { TextField } from "redux-form-material-ui";
// import TextField from "material-ui/TextField";

const style = {
  padding: 20,
  width: "300px"
};

const RecipeForm = (props: any) => (
  <Paper style={style} zDepth={2}>
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="author"
          component="input"
          type="text"
          // hintText="Recipe Author"
        />
      </div>
      <div>
        <Field
          name="recipe"
          component="input"
          type="text"
          // hintText="Recipe Text"
          // multiLine={true}
          // rows={4}
          // rowsMax={7}
        />
      </div>
      <div>
        <RaisedButton type="submit">Add</RaisedButton>
      </div>
    </form>
  </Paper>
);

export default RecipeForm;
