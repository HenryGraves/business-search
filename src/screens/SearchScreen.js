import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar'
import useYelpSearch from '../hooks/useYelpSearch';
import ResultsList from '../components/ResultsList';
const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useYelpSearch();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    })
  }
  const list = [
    <ResultsList style={styles.list}
        title="Budget friendly"
        results={filterResultsByPrice('$')}
        
    />,
    <ResultsList style={styles.list}
        title="Pay day hit"
        results={filterResultsByPrice('$$')}
        
    />,
    <ResultsList style={styles.list}
        title="Take my card"
        results={filterResultsByPrice('$$$')}
        
    />,
    <ResultsList style={styles.list}
        title="Take my card"
        results={filterResultsByPrice('$$$$')}
        
    />
  ];
  return (
    <>
      <SearchBar 
        term={term} 
        onTermChange={(newTerm) => setTerm(newTerm) } 
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>We've found { results.length } results</Text> */}
      <FlatList 
          data={list}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return (item)
          }}
      />
      {/* <ScrollView>
        
        <ResultsList style={styles.list}
          title="Budget friendly"
          results={filterResultsByPrice('$')}
        />
        <ResultsList style={styles.list}
            title="Pay day hit"
            results={filterResultsByPrice('$$')}
        />
        <ResultsList style={styles.list}
            title="Take my card"
            results={filterResultsByPrice('$$$')}
        />
        <ResultsList style={styles.list}
            title="Take my card"
            results={filterResultsByPrice('$$$$')}
        />
      </ScrollView>  */}
    </>
  )
}

const styles = StyleSheet.create({
  list: {
    
  }
});

export default SearchScreen;