

prefix = File.dirname( __FILE__ )



# Tasks
task :default => "create_plugin"

task :create_plugin do
  gen(:plugin)
end

task :create_widget do
  gen(:widget)
end


def usage
  %(usage:
    rake create_plugin name=MyPlugin
  )
end

def quote(template)
  '%(' + template + ')'
end

def gen(type)
  plugin_name = ENV["name"]
  
  if type == :plugin
    plugin_template_file = File.open("res/jquery.PluginTemplate.js", "rb")
  else
    plugin_template_file = File.open("res/jquery.UiWidgetTemplate.js", "rb")
  end
  plugin_template = quote(plugin_template_file.read)
  plugin_template_file.close
  
  
  if plugin_name == nil
    raise usage
  end

  sh "mkdir #{plugin_name}"
  
  new_plugin_code = eval(plugin_template)
  
  new_plugin_file = File.new("#{plugin_name}/jquery.#{plugin_name}.js", "w")
  new_plugin_file.write(new_plugin_code)
  new_plugin_file.close
end