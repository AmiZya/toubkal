// Generated by CoffeeScript 1.6.3
/*
    xs_control_tests.coffee

    Copyright (C) 2013, Connected Sets

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/


(function() {
  var XS, checkbox, checkbox_group, checkbox_group_source, checkbox_source, drop_down, drop_down_source, expect, options, organizer, radio, radio_source, xs;

  XS = typeof require !== "undefined" && require !== null ? (require('../lib/xs.js')).XS : this.XS;

  expect = typeof require !== "undefined" && require !== null ? require('expect.js') : this.expect;

  if (typeof require !== "undefined" && require !== null) {
    require('../lib/code.js');
    require('../lib/pipelet.js');
    require('../lib/filter.js');
    require('../lib/order.js');
    require('../lib/aggregate.js');
    require('../lib/table.js');
    require('../lib/control.js');
  }

  xs = XS.xs;

  organizer = [
    {
      id: "label"
    }
  ];

  options = {
    label: "Charts"
  };

  checkbox_source = xs.order(organizer, {
    name: "Checkbox Source"
  });

  checkbox = checkbox_source.checkbox(document.getElementById("checkbox_control"), {}).set();

  checkbox_group_source = xs.order(organizer, {
    name: "Checkbox Group Source"
  });

  checkbox_group = checkbox_group_source.checkbox_group(document.getElementById("checkbox_group_control")).set();

  radio_source = xs.order(organizer, {
    name: "Radio Source"
  });

  radio = radio_source.radio(document.getElementById("radio_control")).set();

  drop_down_source = xs.order(organizer, {
    name: "Drop Down Source"
  });

  drop_down = drop_down_source.drop_down(document.getElementById("drop_down_control")).set();

  describe('Checkbox():', function() {
    it('checkbox should be empty', function() {
      return expect(checkbox.fetch_all()).to.be.empty;
    });
    it('after checkbox_source.add( object ), checkbox_source should be equal to [ { id: true, label: "Label True" } ]', function() {
      checkbox_source.add([
        {
          id: true,
          label: "Label True"
        }
      ]);
      return expect(checkbox_source.fetch_all()).to.be.eql([
        {
          id: true,
          label: "Label True"
        }
      ]);
    });
    it('after checkbox_source.add( object ), checkbox should be equal to [ { id: true, label: "Label True" } ]', function() {
      return expect(checkbox.fetch_all()).to.be.eql([
        {
          id: true,
          label: "Label True"
        }
      ]);
    });
    it('after checkbox_source.add( object ), checkbox should be equal to [ { id: true, label: "Label True" } ]', function() {
      checkbox_source.add([
        {
          id: false,
          label: "Label False"
        }
      ]);
      return expect(checkbox.fetch_all()).to.be.eql([
        {
          id: true,
          label: "Label True"
        }
      ]);
    });
    it('after checkbox_source.remove( object ), checkbox should be equal to [ { id: false, label: "Label False" } ]', function() {
      checkbox_source.remove([
        {
          id: true,
          label: "Label True"
        }
      ]);
      return expect(checkbox.fetch_all()).to.be.eql([
        {
          id: false,
          label: "Label False"
        }
      ]);
    });
    it('after checkbox_source.remove( object ), checkbox should be empty', function() {
      checkbox_source.remove([
        {
          id: false,
          label: "Label False"
        }
      ]);
      return expect(checkbox.fetch_all()).to.be.empty;
    });
    it('after checkbox_source.add( objects ), checkbox should be equal to [ { id: false, label: "Label False", selected: true } ]', function() {
      checkbox_source.add([
        {
          id: true,
          label: "Label True"
        }, {
          id: false,
          label: "Label False",
          selected: true
        }
      ]);
      return expect(checkbox.fetch_all()).to.be.eql([
        {
          id: false,
          label: "Label False",
          selected: true
        }
      ]);
    });
    return it('after checkbox_source.update( objects ) checkbox should be equal to [ { id: true, label: "Charts", selected: true } ]', function() {
      checkbox_source.update([
        [
          {
            id: true,
            label: "Label True"
          }, {
            id: true,
            label: "Charts",
            selected: true
          }
        ], [
          {
            id: false,
            label: "Label False",
            selected: true
          }, {
            id: false,
            label: "Charts"
          }
        ]
      ]);
      return expect(checkbox.fetch_all()).to.be.eql([
        {
          id: true,
          label: "Charts",
          selected: true
        }
      ]);
    });
  });

  describe('Checkbox_Group():', function() {
    it('checkbox_group should be empty', function() {
      return expect(checkbox_group.fetch_all()).to.be.empty;
    });
    it('after checkbox_group_source.add( objects ), checkbox_group should be equal to result', function() {
      checkbox_group_source.add([
        {
          id: 1,
          label: "Photography",
          selected: true
        }, {
          id: 2,
          label: "Fishing"
        }, {
          id: 3,
          label: "Playing Computer Games"
        }, {
          id: 4,
          label: "Traveling",
          selected: true
        }, {
          id: 5,
          label: "Cooking"
        }, {
          id: 6,
          label: "Stamp / Coin Collection",
          selected: true
        }
      ]);
      return expect(checkbox_group.fetch_all()).to.be.eql([
        {
          id: 1,
          label: "Photography",
          selected: true
        }, {
          id: 6,
          label: "Stamp / Coin Collection",
          selected: true
        }, {
          id: 4,
          label: "Traveling",
          selected: true
        }
      ]);
    });
    it('after checkbox_group_source.remove( objects ), checkbox_group should be equal to result', function() {
      checkbox_group_source.remove([
        {
          id: 3,
          label: "Playing Computer Games"
        }, {
          id: 4,
          label: "Traveling",
          selected: true
        }
      ]);
      return expect(checkbox_group.fetch_all()).to.be.eql([
        {
          id: 1,
          label: "Photography",
          selected: true
        }, {
          id: 6,
          label: "Stamp / Coin Collection",
          selected: true
        }
      ]);
    });
    it('after checkbox_group_source.add( object ), checkbox_group should be equal to result', function() {
      checkbox_group_source.add([
        {
          id: 7,
          label: "Pottery",
          selected: true
        }, {
          id: 8,
          label: "Gardening"
        }
      ]);
      return expect(checkbox_group.fetch_all()).to.be.eql([
        {
          id: 1,
          label: "Photography",
          selected: true
        }, {
          id: 7,
          label: "Pottery",
          selected: true
        }, {
          id: 6,
          label: "Stamp / Coin Collection",
          selected: true
        }
      ]);
    });
    return it('after checkbox_group_source.update( objects ), checkbox_group should be equal to result', function() {
      checkbox_group_source.update([
        [
          {
            id: 3,
            label: "Playing Computer Games"
          }, {
            id: 3,
            label: "Playing Video Games"
          }
        ], [
          {
            id: 7,
            label: "Pottery",
            selected: true
          }, {
            id: 7,
            label: "Pottery",
            selected: false
          }
        ], [
          {
            id: 8,
            label: "Gardening"
          }, {
            id: 8,
            label: "Gardening and Plants",
            selected: true
          }
        ]
      ]);
      return expect(checkbox_group.fetch_all()).to.be.eql([
        {
          id: 8,
          label: "Gardening and Plants",
          selected: true
        }, {
          id: 1,
          label: "Photography",
          selected: true
        }, {
          id: 6,
          label: "Stamp / Coin Collection",
          selected: true
        }
      ]);
    });
  });

  describe('Radio():', function() {
    it('radio should be empty', function() {
      return expect(radio.fetch_all()).to.be.empty;
    });
    it('after radio_source.add( objects ), radio should be equal to [ { id: 1, label: "Islam", selected: true } ]', function() {
      radio_source.add([
        {
          id: 1,
          label: "Islam",
          selected: true
        }, {
          id: 2,
          label: "Christianity"
        }, {
          id: 3,
          label: "Judaism"
        }, {
          id: 6,
          label: "Satanism"
        }, {
          id: 7,
          label: "Atheism"
        }, {
          id: 8,
          label: "Rastafari"
        }
      ]);
      return expect(radio.fetch_all()).to.be.eql([
        {
          id: 1,
          label: "Islam",
          selected: true
        }
      ]);
    });
    it('after radio_source.remove( objects ), radio should be empty', function() {
      radio_source.remove([
        {
          id: 6,
          label: "Satanism"
        }, {
          id: 1,
          label: "Islam",
          selected: true
        }
      ]);
      return expect(radio.fetch_all()).to.be.empty;
    });
    it('after radio_source.add( object ), radio should be equal to [ { id: 5, label: "Hinduism", selected: true } ]', function() {
      radio_source.add([
        {
          id: 5,
          label: "Hinduism",
          selected: true
        }
      ]);
      return expect(radio.fetch_all()).to.be.eql([
        {
          id: 5,
          label: "Hinduism",
          selected: true
        }
      ]);
    });
    return it('after radio_source.update( objects ), radio should be equal to [ { id: 4, label: "Rastafari", selected: true } ]', function() {
      radio_source.update([
        [
          {
            id: 8,
            label: "Rastafari"
          }, {
            id: 4,
            label: "Rastafari",
            selected: true
          }
        ], [
          {
            id: 5,
            label: "Hinduism"
          }, {
            id: 5,
            label: "Buddhism"
          }
        ], [
          {
            id: 7,
            label: "Atheism"
          }, {
            id: 7,
            label: "Islam"
          }
        ]
      ]);
      return expect(radio.fetch_all()).to.be.eql([
        {
          id: 4,
          label: "Rastafari",
          selected: true
        }
      ]);
    });
  });

  describe('Drop_Down():', function() {
    it('drop_down should be empty', function() {
      return expect(drop_down.fetch_all()).to.be.empty;
    });
    it('after drop_down_source.add( objects ), drop_down should be equal to [ { id: 3, label: "France" } ]', function() {
      drop_down_source.add([
        {
          id: 1,
          label: "USA"
        }, {
          id: 2,
          label: "Morocco"
        }, {
          id: 3,
          label: "France"
        }, {
          id: 4,
          label: "Japan"
        }, {
          id: 5,
          label: "Spain"
        }, {
          id: 6,
          label: "Portugal"
        }, {
          id: 8,
          label: "Madagascar"
        }
      ]);
      return expect(drop_down.fetch_all()).to.be.eql([
        {
          id: 3,
          label: "France"
        }
      ]);
    });
    it('after drop_down_source.remove( objects ), drop_down should be equal to [ { id: 3, label: "France" } ]', function() {
      drop_down_source.remove([
        {
          id: 2,
          label: "Morocco"
        }, {
          id: 5,
          label: "Spain"
        }
      ]);
      return expect(drop_down.fetch_all()).to.be.eql([
        {
          id: 3,
          label: "France"
        }
      ]);
    });
    it('after drop_down_source.remove( object ), drop_down should be equal to [ { id: 4, label: "Japan" } ]: remove selected object', function() {
      drop_down_source.remove([
        {
          id: 3,
          label: "France"
        }
      ]);
      return expect(drop_down.fetch_all()).to.be.eql([
        {
          id: 4,
          label: "Japan"
        }
      ]);
    });
    it('after drop_down_source.add( object ), drop_down should be equal to [ { id: 4, label: "Japan" } ]', function() {
      drop_down_source.add([
        {
          id: 7,
          label: "China"
        }
      ]);
      return expect(drop_down.fetch_all()).to.be.eql([
        {
          id: 4,
          label: "Japan"
        }
      ]);
    });
    return it('after drop_down_source.update( objects ), drop_down should be equal to [ { id: 8, label: "Madagascar" } ]', function() {
      drop_down_source.update([
        [
          {
            id: 6,
            label: "Portugal"
          }, {
            id: 5,
            label: "Germany"
          }
        ], [
          {
            id: 8,
            label: "Madagascar"
          }, {
            id: 8,
            label: "Madagascar",
            selected: true
          }
        ], [
          {
            id: 4,
            label: "Japan"
          }, {
            id: 4,
            label: "Italy"
          }
        ]
      ]);
      return expect(drop_down.fetch_all()).to.be.eql([
        {
          id: 8,
          label: "Madagascar",
          selected: true
        }
      ]);
    });
  });

}).call(this);

/*
//@ sourceMappingURL=xs_control_tests.map
*/
