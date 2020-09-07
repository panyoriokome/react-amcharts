import React, { useState } from 'react';
import './App.css';
import WordCloudTextData from './components/WordcloudTextData';
import WordCludStructuredData from './components/WordCloudStructuredData'
import ForceDirectedTree from './components/ForceDirectedTree'
import ForceDirectedTreeLink from './components/ForceDirectedTreeLink'
import Button from './components/Button'

const initialData = [
  {
  "name": "First",
  "value": 10,
  "link": ["Second"],
  "linkWidth": 5
}, {
  "name": "Second",
  "value": 20,
  "link": ["Third"],
  "linkWidth": 10
}, {
  "name": "Third",
  "value": 10,
  "link": ["First"],
  "linkWidth": 5
},{
  "name": "求める",
  "value": 10,
  "link": ["企業"],
  "linkWidth": 10
}, {
  "name": "企業",
  "value": 20,
  "link": ["求める"],
  "linkWidth": 25
}, {
  "name": "多様性",
  "value": 10,
  "link": ["大きい"],
  "linkWidth": 10
},{
  "name": "大きい",
  "value": 10,
  "link": ["多様性"],
  "linkWidth": 8
}, {
  "name": "経営",
  "value": 10,
  "link": ["できる"],
  "linkWidth": 19
},{
  "name": "できる",
  "value": 10,
  "link": ["実現", "作る"],
  "linkWidth": 15
},{
  "name": "実現",
  "value": 10,
  "link": [],
  "linkWidth": 3
}, {
  "name": "作る",
  "value": 20,
  "link": ["拡大"],
  "linkWidth": 5
}, {
  "name": "拡大",
  "value": 10,
  "link": ["全体"],
  "linkWidth": 14
},{
  "name": "サンプル",
  "value": 10,
  "link": [],
  "linkWidth": 5
}]

const secondData = [
 {
  "name": "求める",
  "value": 10,
  "link": ["企業"]
}, {
  "name": "企業",
  "value": 20,
  "link": ["求める"]
}, {
  "name": "多様性",
  "value": 10,
  "link": ["大きい"]
},{
  "name": "大きい",
  "value": 10,
  "link": ["多様性"]
}, {
  "name": "経営",
  "value": 10,
  "link": ["できる"]
},{
  "name": "できる",
  "value": 10,
  "link": ["実現", "作る"]
},{
  "name": "実現",
  "value": 10,
  "link": []
}, {
  "name": "作る",
  "value": 20,
  "link": ["拡大"]
}, {
  "name": "拡大",
  "value": 10,
  "link": ["全体"]
},{
  "name": "業界",
  "value": 10,
  "link": ["証券"]
}]


function App() {
  const [treeLinkData, setTreeLinkData] = useState(initialData)

  function handleClick(){
    setTreeLinkData(secondData)
  }

  return (
    <div className="App">
      <WordCloudTextData />
      <WordCludStructuredData />
      <ForceDirectedTree />
      <ForceDirectedTreeLink data={treeLinkData}/>
      <Button onClick={handleClick}>データ変更</Button>
    </div>
  );
}

export default App;
