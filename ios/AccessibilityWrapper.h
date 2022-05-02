//
//  AccessibilityWrapper.h
//

#import <UIKit/UIKit.h>
#import <UIKit/UIAccessibilityContainer.h>

#import <React/RCTView.h>

@interface AccessibilityWrapper : RCTView

- (void) setAccessibilityFields: (NSArray *)reactTags;

@end
