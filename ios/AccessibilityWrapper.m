//
//  AccessibilityWrapper.m
//

#import <Foundation/Foundation.h>
#import "AccessibilityWrapper.h"
#import <UIKit/UIKit.h>

@implementation AccessibilityWrapper

- (void) setAccessibilityFields: (NSArray *)fields
{
  NSMutableArray *accessibleElements = [NSMutableArray arrayWithCapacity:[fields count]];
  [fields enumerateObjectsUsingBlock:^(id obj, NSUInteger idx, BOOL * stop) {
    UIView *field = obj;
    [accessibleElements addObject:field];
  }];
  self.accessibilityElements = (NSArray *)accessibleElements;
}

- (bool) shouldGroupAccessibilityChildren {
  return YES;
}

@end
