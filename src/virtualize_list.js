import React, { useState, useEffect } from "react";
import faker from "faker";

import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";

export default function VirtualList() {
  const [people, setPeople] = useState([]);
  const [time, setTime] = useState(new Date());
  //   var randomCard = faker.helpers.createCard(); // random contact card containing many properties

  //   console.log(randomCard);

  useEffect(() => {
    console.log("Call Use Effect");
    setPeople(
      [...Array(1000000).keys()].map((key) => {
        return {
          key: key,
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          address: faker.address,
        };
      })
    );
  }, []);

  /*  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 10000);

    return () => clearInterval(interval);
  }, []); */

  return (
    <div>
      <h1>Fake data Test {time.toISOString()}</h1>

      <div style={{ width: "100%", height: 500 }}>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowHeight={50}
              rowCount={people.length}
              rowRenderer={({ key, index, style, parent }) => {
                const person = people[index];
                // console.log(person);
                return (
                  <div key={key} style={style}>
                    <p>{person.firstName + " " + person.lastName}</p>
                    <p>
                      fdfjksdfsdi jfdskf fkdffjsdf sdkfjldfsdf kjsdfklfjksdfj
                      sfdfkhfdsdh sdfhdfksdf sfdkfdkfjsdfh fsdhkjsdfksdfb
                      sfdjfhfsdf kfdfsdf kfsdf kfdfjskdffdhffsdk fkdsffksdfsd
                    </p>
                  </div>
                );
              }}
            />
          )}
        </AutoSizer>
      </div>

      {/*  <ul>
        {people.map((p) => (
          <li key={p.key}>{p.firstName}</li>
        ))}
      </ul> */}
    </div>
  );
}
