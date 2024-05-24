import { Datagrid, List, NumberField, ReferenceField, TextField, SelectField } from "react-admin";

export const ChallengeList = () => {
  
  return(
    <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="question"/>
      <SelectField
      source="type"
      choices={[
        {
          id: "SELECT",
          name: "SELECT",
        },
        {
          id: "ASSIST",
          name: "ASSIST",
        }
      ]}
      />
      <ReferenceField source="lessonId" reference="lessons"/>
      <NumberField source="order" /> 
    </Datagrid>
  </List>
  );
  
};