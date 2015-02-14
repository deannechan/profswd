# -*- encoding: utf-8 -*-
# stub: hotwater 0.1.2 ruby lib
# stub: ext/hotwater/Rakefile

Gem::Specification.new do |s|
  s.name = "hotwater"
  s.version = "0.1.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Colin Surprenant"]
  s.date = "2013-02-25"
  s.description = "Ruby & JRuby gem with fast string edit distance algorithms C implementations with FFI bindings"
  s.email = ["colin.surprenant@gmail.com"]
  s.extensions = ["ext/hotwater/Rakefile"]
  s.files = ["ext/hotwater/Rakefile"]
  s.homepage = "http://github.com/colinsurprenant/hotwater"
  s.rubygems_version = "2.2.2"
  s.summary = "Fast string edit distance"

  s.installed_by_version = "2.2.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<rake>, [">= 0"])
      s.add_runtime_dependency(%q<ffi>, [">= 0"])
      s.add_runtime_dependency(%q<ffi-compiler>, [">= 0"])
      s.add_development_dependency(%q<rspec>, [">= 0"])
    else
      s.add_dependency(%q<rake>, [">= 0"])
      s.add_dependency(%q<ffi>, [">= 0"])
      s.add_dependency(%q<ffi-compiler>, [">= 0"])
      s.add_dependency(%q<rspec>, [">= 0"])
    end
  else
    s.add_dependency(%q<rake>, [">= 0"])
    s.add_dependency(%q<ffi>, [">= 0"])
    s.add_dependency(%q<ffi-compiler>, [">= 0"])
    s.add_dependency(%q<rspec>, [">= 0"])
  end
end
