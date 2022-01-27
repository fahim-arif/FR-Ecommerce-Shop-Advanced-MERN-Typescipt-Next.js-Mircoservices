import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {DragDropContext} from "react-beautiful-dnd";
import DraggableElement from "./DraggableElement";
import axios from 'axios';

const DragDropContextContainer = styled.div`
  padding: 20px;
  border: 4px solid indianred;
  border-radius: 6px;
`;

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;
`;

// fake data generator
const getItems = (count, prefix) =>
  Array.from({length: count}, (v, k) => k).map((k) => {
    const randomId = Math.floor(Math.random() * 1000);
    return {
      id: `item-${randomId}`,
      prefix,
      content: `item ${randomId}`
    };
  });

const removeFromList = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

const lists = ["new", "inProgress", "review", "done"];

const generateLists = () =>
  lists.reduce(
    (acc, listKey) => ({...acc, [listKey]: getItems(10, listKey)}),
    {}
  );

function LeadGeneration() {
  const [leadData, setLeadData] = useState([]);
  const [elements, setElements] = React.useState({new: [], done: [], review: [], inProgress: []});
  console.log(elements)
  const demo = {todo: [{id: 'item-606', prefix: 'todo', content: 'item 606'}], done: [{id: 'item-607', prefix: 'done', content: 'item 607'}], inProgress: [{id: 'item-608', prefix: 'inProgress', content: 'item 608'}]}
  console.log(demo)
  // setElements(demo)
  // useEffect(() => {
  //   setElements(generateLists());
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get('http://localhost:5000/api/lead')
      setLeadData(data);
      // console.log(data);
      let temp = {...elements};
      data.map((lead) => (
        temp.new = [...temp.new, {

          id: lead._id,
          prefix: lists[0],
          content: 'lead',
          data: lead,
        }]
      ))
      console.log(temp)
      setElements(temp);
    }
    fetchData();
  }, [])

  console.log(elements);
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const listCopy = {...elements};

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setElements(listCopy);
  };

  return (
    <DragDropContextContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <ListGrid>
          {lists.map((listKey) => (
            <DraggableElement
              elements={elements[listKey]}
              key={listKey}
              prefix={listKey}
            />
          ))}
        </ListGrid>
      </DragDropContext>
    </DragDropContextContainer>
  );
}

export default LeadGeneration;
