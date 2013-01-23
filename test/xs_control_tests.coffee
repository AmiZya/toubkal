###
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
    
###

# ----------------------------------------------------------------------------------------------
# xs control unit test suite
# ------------------------

# include modules
XS = if require? then ( require '../lib/xs.js' ).XS else this.XS

if require?
  require '../lib/code.js'
  require '../lib/fork.js'
  require '../lib/filter.js'
  require '../lib/ordered_set.js'
  require '../lib/aggregator.js'
  require '../lib/table.js'
  require '../lib/control.js'

chai = require 'chai' if require?
chai?.should()

Set         = XS.Set
Table       = XS.Table
Ordered_Set = XS.Ordered_Set
Control     = XS.Control

organizer       = [ { id: "id" } ]
options         = {}
checkbox_source = new Ordered_Set [], organizer, { name: "Checkbox Source" }
checkbox        = checkbox_source.checkbox document.getElementById( "checkbox_control" ), organizer, options

describe 'Checkbox():', ->
  it 'checkbox should be empty', ->
    checkbox.get().should.be.empty
  
  describe 'add():', ->
    it 'after checkbox_source.add( object ), checkbox_source should be equal to [ { id: true, label: "Chart", column: "sales" } ]', ->
      checkbox_source.add [ { id: true, label: "Chart", column: "sales" } ]
      
      checkbox_source.get().should.be.eql [ { id: true, label: "Chart", column: "sales" } ]
      
    it 'after checkbox_source.add( object ), checkbox should be equal to [ { id: true, label: "Chart", column: "sales" } ]', ->
      checkbox.get().should.be.eql [ { id: true, label: "Chart", column: "sales" } ]
    
    it 'checkbox.value should be equal to { id: true, label: "Chart", column: "sales" }', ->
      checkbox.value.should.be.eql { id: true, label: "Chart", column: "sales" }
    
    it 'after checkbox_source.add( object ), checkbox should be equal to [ { id: false, label: "Chart" }, { id: true, label: "Chart", column: "sales" } ]', ->
      checkbox_source.add [ { id: false, label: "Chart" } ]
      
      checkbox.get().should.be.eql [ { id: false, label: "Chart" }, { id: true, label: "Chart", column: "sales" } ]
    
    it 'checkbox.value should be equal to { id: true, label: "Chart", column: "sales" }', ->
      checkbox.value.should.be.eql { id: true, label: "Chart", column: "sales" }
    
