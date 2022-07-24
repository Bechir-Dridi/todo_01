import React, { useState, useEffect } from 'react';
import "./App.css"
import GetList from './components/GetList';
import Btn from './components/Btn';


function App() {

  //Create the List
  const [tab, setTab] = useState([
    // { text: "Task_01", is_done: false, stat: false },
  ]);

  //Read & Get...

  //AddList
  const add_list = (text) => {
    const new_tab = [...tab, { text, is_done: false }];
    setTab(new_tab);

    console.log("add_list is working", text);
    console.log(new_tab);
  }
  //Done
  const done_list = (index) => {
    const new_tab = [...tab];
    new_tab[index].is_done = !(new_tab[index].stat);
    new_tab[index].stat = new_tab[index].is_done;
    setTab(new_tab);
    console.log(new_tab[index].is_done);
  }
  //Delete
  const delete_list = (index) => {
    const new_tab = [...tab];
    new_tab.splice(index, 1);
    setTab(new_tab);
  }


  const [filtered, goFilter] = useState([]);

  //Dropdown menu & Filter_State
  const [dropped, goDrop] = useState("all");

  //goDrop
  const goDropFct = (e) => {
    goDrop(e.target.value);
  }

  //useEffect for Filter
  useEffect(() => { goFilterFct(); }, [tab, dropped]);
  //goFilterFct(), everytime ptab or dropped updates.

  //goFilterFct
  const goFilterFct = () => {
    switch (dropped) {
      case "completed": goFilter(tab.filter((element) => element.is_done === true)); break;
      case "uncompleted": goFilter(tab.filter((element) => element.is_done === false)); break;
      default: goFilter(tab); break;
    }
  }
  return (
    <>
      <header>
        <h1>MY TODO LIST</h1>
      </header>

      {/* Get */}
      <GetList padd_list={add_list} pgoDropFct={goDropFct} />
      {/*show*/}
      {filtered.map((list, index) => (
        <Btn key={index} pindex={index} plist={list} pdone_list={done_list} pdelete_list={delete_list} />
      ))
      }
    </>
  );

}
export default App;