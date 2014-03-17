Announcing the release of Greek Bible (Version 0_2):

Feature-wise, there is not much different about this release. However, it should perform better and without bugs.

### Developer Notes

**Greek Bible V0_2 - Lessons Learned**

Well mark this one down as a failure in project and time management. I
added essentially no user features and spent almost 20 hours working
on the system. However, I learned much.

*Some lessons to remember:*

#### Focus on User Features

In researching different aspects of the code, I began chasing rabbits
trying to include "better" programming techniques.

Ironically, BDD - behavior driven design - killed my time in trying to
implement it.

(Using Yadda with Gherkin syntax feature files and trying to get this
to work in QUnit with async code wasted almost 10 hours. Finally, I
removed it and wrote some simple helper functions in 15 minutes to
accomplish the same.)

I learned through much wasted effort the importance of staying focused
on user features. Now I have this fundamental rule:

    DO NOT IMPLEMENT SYSTEM FEATURES DURING APP DEVELOPMENT

I will work with the existing frameworks and functionality and make
the app work with those restraints.


#### Write Tests first

This is a simple principle of TDD. However, in my excitement to get
something done, I often jump in and start implementing features before
having a single test. BDD helps solve this by focusing on the user
features instead of the unit of code.

I was writing down the user features I wanted to implement in a task
list before coding, but this was not testable.

Now with BDD and the fast technique I learned after wasting so much
time, I can write out the user features first and they will
immediately show up as a failed test.

#### Simple BDD Technique

I discovered a simpler altenative to Cucumber steps that works much
better for me to prevent wasting time in step refactoring.

It allows me to write a scenario in plain text that will fail first.

Basically, it is similar to the expects call of a unit test:
- Define a scenario
- Input the expected steps as simple strings
- Implement the unit test
- During each part of the unit test log when a step is completed
- After the unit test, ensure that the completed steps match the expected steps

These scenarios are in the unit test files. When the unit tests are
run, it can output the actual features being tested in a feature file
format (gherkin language).

If the project has hand written feature files, they can be loaded and
compared to the actual features that were tested. Any missing features
or scenarios can be marked as a test failure as an unimplemented
feature or scenario.

This allows BDD with living documents but using simple unit tests
instead of complicated steps.

After this technique becomes mature, I'll release it as a simple
extension to any testing framework.


#### Links:

- [Greek Bible App](http://www.toldpro.com/Apps/GreekBible/V2/)
- [GitHub Source Code](https://github.com/ricklove/GreekBibleApp/tree/ReleaseV2)
- [PhoneGap - Latest Version](https://build.phonegap.com/apps/783113/install)

#### Screenshots

![](http://3.bp.blogspot.com/-K8XN4KrXizM/UvhqtHBgsgI/AAAAAAAAAZU/y60uVKzaRHY/s1600/image-756633.png)
![](http://3.bp.blogspot.com/-K8XN4KrXizM/UvhqtHBgsgI/AAAAAAAAAZU/y60uVKzaRHY/s320/image-756633.png)
![](http://3.bp.blogspot.com/--b4054jPFsI/UvhqtnqWfJI/AAAAAAAAAZg/PDIFSp0G1uU/s1600/image-758332.png)
![](http://3.bp.blogspot.com/--b4054jPFsI/UvhqtnqWfJI/AAAAAAAAAZg/PDIFSp0G1uU/s320/image-758332.png)
![](http://3.bp.blogspot.com/-MuUG4dCEUF0/UvhquNIcl5I/AAAAAAAAAZs/5hOgW8uDy28/s1600/image-760743.png)
![](http://3.bp.blogspot.com/-MuUG4dCEUF0/UvhquNIcl5I/AAAAAAAAAZs/5hOgW8uDy28/s320/image-760743.png)

