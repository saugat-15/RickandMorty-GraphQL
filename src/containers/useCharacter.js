import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_CHARACTER = gql`
query GetCharacter($id: ID!) {
    character(id : $id){
      name
      image
      episode{
        name
        episode
      }
    }
  }
`

export const useCharacter = (id) => {
    const { data, error, loading } = useQuery(GET_CHARACTER, {
        variables: {
            id,
        }
    });

    return {
        data,
        error,
        loading,
    }
}