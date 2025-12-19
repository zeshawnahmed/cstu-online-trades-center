import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Lock, User, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Alumni = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is just for looks - no actual authentication
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 flex flex-col">
      {/* Header */}
      <header className="p-4 sm:p-6">
        <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <GraduationCap className="h-6 w-6" />
          <span className="font-semibold">Back to AIT</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="border-navy-600/50 bg-navy-800/50 backdrop-blur-sm shadow-2xl">
            <CardHeader className="text-center space-y-4 pb-6">
              <div className="mx-auto w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-navy-900" />
              </div>
              <div>
                <CardTitle className="text-2xl sm:text-3xl font-bold text-white">
                  AIT Alumni Association
                </CardTitle>
                <CardDescription className="text-white/70 mt-3 text-sm sm:text-base leading-relaxed">
                  Stay up to date on alumni events, networking opportunities, job opportunities, and more.
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-white/90">Username</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                    <Input
                      id="username"
                      type="text"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="pl-10 bg-navy-700/50 border-navy-600 text-white placeholder:text-white/40 focus:border-gold-400 focus:ring-gold-400/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white/90">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 bg-navy-700/50 border-navy-600 text-white placeholder:text-white/40 focus:border-gold-400 focus:ring-gold-400/20"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold py-3"
                >
                  Sign In
                </Button>
              </form>

              {/* Request Access Info */}
              <div className="pt-4 border-t border-navy-600/50">
                <div className="flex items-start gap-3 text-center">
                  <div className="flex-1">
                    <p className="text-white/80 text-sm leading-relaxed">
                      Current and former alumni, to request access please email{' '}
                      <a 
                        href="mailto:admin@levelupait.com" 
                        className="text-gold-400 hover:text-gold-300 font-medium underline underline-offset-2"
                      >
                        admin@levelupait.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </motion.div>
      </main>
    </div>
  );
};

export default Alumni;
