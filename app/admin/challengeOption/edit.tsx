import { Create, Datagrid, ReferenceInput, SimpleForm, TextInput, required, SelectInput, BooleanInput, Edit } from "react-admin";

export const ChallengeOptionEdit = () => {
  
  return(
    <Edit>
    <SimpleForm>
      <TextInput source="text" validate={[required()]}  label="Text"/>
      <BooleanInput
      source="correct"
      label="Correct option"
      />
      <ReferenceInput
      source="challengeId"
      reference="challenges"
      />
      <TextInput
      source="imageSrc"
      label="Image URL"
      />
      <TextInput
      source="audioSrc"
      label="Audio URL"
      />
    </SimpleForm>
  </Edit>
  );
};