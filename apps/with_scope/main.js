// ==========================================================================
// Project:   WithScope
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals WithScope */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//

WithScope.main = function main() {
  var b;
  // Load fixtures into Store.
  WithScope.store.find(WithScope.Post);
  WithScope.store.find(WithScope.Person);

  SC.Benchmark.start(b = "Make People Querys");
  WithScope.QUERY_PEOPLE = SC.Query.local(WithScope.Person);
  WithScope.QUERY_PERSON_SCOTT  = SC.Query.local(WithScope.Person, 'lastName = "Scott"');
  WithScope.QUERY_PERSON_MICHAEL = SC.Query.local(WithScope.Person, 'firstName = "pichael"');
  SC.Benchmark.end(b);

  SC.Benchmark.start(b = "Make Post Querys");
  WithScope.QUERY_POSTS = SC.Query.local(WithScope.Post);
  WithScope.QUERY_POST_SCOTT  = SC.Query.local(WithScope.Post, 'body = "Scott"');
  WithScope.QUERY_POST_MICHAEL = SC.Query.local(WithScope.Post, 'title = "Michael"');
  SC.Benchmark.end(b);

  // Step 1: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably 
  // create multiple pages and panes.  
  WithScope.getPath('mainPage.mainPane').append() ;

  SC.Benchmark.start(b = "Find all People");
  WithScope.people = WithScope.store.find(WithScope.QUERY_PEOPLE);
  SC.Benchmark.end(b);
  console.log("All People: %@".fmt(WithScope.people.get('length')));

  SC.Benchmark.start(b = "Find All People Scotts with Scope");
  WithScope.person_scott = WithScope.store.find(WithScope.QUERY_PERSON_SCOTT.queryWithScope(WithScope.people));
  SC.Benchmark.end(b);
  console.log("WithScope person scott length: %@".fmt(WithScope.person_scott.get('length')));

  SC.Benchmark.start(b = "** Find All People Michael with 2nd level Scope");
  WithScope.person_michael = WithScope.store.find(WithScope.QUERY_PERSON_MICHAEL.queryWithScope(WithScope.person_scott));
  SC.Benchmark.end(b);
  console.log("WithScope person michael length: %@".fmt(WithScope.person_michael.get('length')));

  SC.Benchmark.start(b = "Find all Posts");
  WithScope.posts = WithScope.store.find(WithScope.QUERY_POSTS);
  SC.Benchmark.end(b);
  console.log("All Posts: %@".fmt(WithScope.posts.get('length')));

  SC.Benchmark.start(b = "Make Post Scotts with no scope");
  WithScope.post_scott = WithScope.store.find(WithScope.QUERY_POST_SCOTT);
  SC.Benchmark.end(b);
  console.log("WithScope post scott length: %@".fmt(WithScope.post_scott.get('length')));

  SC.Benchmark.start(b = "Find All Post Michael with no Scope");
  WithScope.post_michael = WithScope.store.find(WithScope.QUERY_POST_MICHAEL);
  SC.Benchmark.end(b);
  console.log("WithScope post michael length: %@".fmt(WithScope.post_michael.get('length')));

  SC.Benchmark.report();

} ;

function main() { WithScope.main(); }
