require 'json'

package = JSON.parse(File.read(File.join(__dir__, '..', 'package.json')))

Pod::Spec.new do |s|
  s.name           = 'FaceLivenessDetection'
  s.version        = package['version']
  s.summary        = package['description']
  s.description    = package['description']
  s.license        = package['license']
  s.author         = package['author']
  s.homepage       = package['homepage']
  s.platforms      = { :ios => '14.0', :tvos => '13.4' }
  s.swift_version  = '5.4'
  s.source         = { git: 'https://github.com/manan-schmooze/face-liveness-detection' }
  s.static_framework = true

  s.dependency 'ExpoModulesCore'

  spm_dependency(s,  
  url: 'https://github.com/aws-amplify/amplify-ui-swift-liveness', 
  requirement: {kind: 'upToNextMajorVersion', minimumVersion: '1.3.2'}, 
  products: ['FaceLiveness'] 
) 
  # Swift/Objective-C compatibility
  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES',
    'SWIFT_COMPILATION_MODE' => 'wholemodule'
  }

  s.source_files = "**/*.{h,m,swift}"
end
