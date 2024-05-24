import { Datagrid, List, ReferenceArrayField, TextField } from "react-admin";

export const UnitList = () => {
  
  return(
    <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <ReferenceArrayField  source="CourseId" reference="courses"/>
      <TextField source="order" />
    </Datagrid>
  </List>
  );
  
};