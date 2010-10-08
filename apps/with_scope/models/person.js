// ==========================================================================
// Project:   WithScope.Person
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals WithScope */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
WithScope.Person = SC.Record.extend(
/** @scope WithScope.Person.prototype */ {

  firstName: SC.Record.attr(String),
  lastName: SC.Record.attr(String)

}) ;