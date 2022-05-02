//
//  AccessibilityWrapperManager.m
//

#import <Foundation/Foundation.h>
#import <React/RCTUIManager.h>
#import "AccessibilityWrapper.h"
#import "AccessibilityWrapperManager.h"

@implementation AccessibilityWrapperManager

RCT_EXPORT_MODULE()

- (UIView *)view {
  return [[AccessibilityWrapper alloc] init];
}

RCT_EXPORT_METHOD(setAccessibilityFields:(nonnull NSNumber *)reactTag
                  fieldsReactTags: (nonnull NSArray *)fieldsReactTags) {
  dispatch_async(dispatch_get_main_queue(), ^{
    AccessibilityWrapper *component = (AccessibilityWrapper *)[self.bridge.uiManager viewForReactTag:reactTag];

    NSMutableArray *fields = [NSMutableArray arrayWithCapacity:[fieldsReactTags count]];

    [fieldsReactTags enumerateObjectsUsingBlock:^(id obj, NSUInteger idx, BOOL * stop) {
      NSNumber *tag = (NSNumber *)obj;
      UIView *field = [self.bridge.uiManager viewForReactTag:tag];
      [fields addObject:field];
    }];

    [component setAccessibilityFields: fields];
  });
}

@end
