import React from "react";
import { Field } from "redux-form";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import { TextField } from "redux-form-material-ui";

const style = {
  padding: 20,
  width: "300px"
};

const RecipeForm = props => (
  <Paper style={style} zDepth={2}>
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="author"
          component={TextField}
          type="text"
          hintText="Recipe Author"
        />
      </div>
      <div>
        <Field
          name="recipe"
          component={TextField}
          type="text"
          hintText="Recipe Text"
          multiLine={true}
          rows={4}
          rowsMax={7}
        />
      </div>
      <div>
        <RaisedButton type="submit">Add</RaisedButton>
      </div>
    </form>
  </Paper>
);

export default RecipeForm;
