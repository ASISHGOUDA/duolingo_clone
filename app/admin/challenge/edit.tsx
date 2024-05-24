import { Create, Datagrid, NumberInput, ReferenceInput, SimpleForm, TextInput, required, SelectInput, Edit } from "react-admin";

export const ChallengeEdit = () => {
  
  return(
    <Edit>
    <SimpleForm>
      <TextInput source="question" validate={[required()]}  label="Question"/>
      <SelectInput
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
      validate={[required()]}
      />
      <ReferenceInput
      source="lessonId"
      reference="lessons"
      />
      <NumberInput
      source="order"
      validate={[required()]}
      label="Order"
      />
    </SimpleForm>
  </Edit>
  );
};