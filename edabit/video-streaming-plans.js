/*
Video Streaming Plans
source: edabit - very easy
https://edabit.com/challenge/SrCTGbhwPRyHZSAGu

Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan 
which have class properties of the following:

BasicPlan	StandardPlan	PremiumPlan
✓	✓	✓	canStream
✓	✓	✓	canDownload
✓	✓	✓	hasSD
	✓	✓ hasHD
	  ✓ hasUHD
1	2	4	numOfDevices
$8.99	$12.99	$15.99	price

**Examples

BasicPlan.hasSD ➞ true 

PremiumPlan.hasSD ➞ true

BasicPlan.hasUHD ➞ false

BasicPlan.price ➞ '$8.99'

PremiumPlan.numOfDevices ➞ 4
*/

class BasicPlan {
  static canStream = true;
  static canDownload = true;
  static numOfDevices = 1;
  static hasSD = true;
  static hasHD = false;
  static hasUHD = false;
  static price = '$8.99';
}

// Write the classes for StandardPlan and PremiumPlan here!

class StandardPlan extends BasicPlan {
  static numOfDevices = 2;
  static hasHD = true;
  static price = '$12.99';
}

class PremiumPlan extends StandardPlan {
  static numOfDevices = 4;
  static hasUHD = true;
  static price = '$15.99';
}

// Test cases
console.log(BasicPlan.hasUHD);
console.log(StandardPlan.hasUHD);
