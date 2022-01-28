import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_CHARACTERS  = gql`
query{
  characters {
    results {
      id
      name
      image
    }
  }
}
`

export const useCharacters = () => {
    const { error, data, loading } = useQuery(GET_CHARACTERS);

    return {
        error,
        data,
        loading,
    }
}